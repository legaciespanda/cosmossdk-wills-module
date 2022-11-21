package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"willstorage/x/will/types"
)

func (k Keeper) WillAll(c context.Context, req *types.QueryAllWillRequest) (*types.QueryAllWillResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var wills []types.Will
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	willStore := prefix.NewStore(store, types.KeyPrefix(types.WillKey))

	pageRes, err := query.Paginate(willStore, req.Pagination, func(key []byte, value []byte) error {
		var will types.Will
		if err := k.cdc.Unmarshal(value, &will); err != nil {
			return err
		}

		wills = append(wills, will)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllWillResponse{Will: wills, Pagination: pageRes}, nil
}

func (k Keeper) Will(c context.Context, req *types.QueryGetWillRequest) (*types.QueryGetWillResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	will, found := k.GetWill(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetWillResponse{Will: will}, nil
}
