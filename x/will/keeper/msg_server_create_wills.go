package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"willstorage/x/will/types"
)

func (k msgServer) CreateWills(goCtx context.Context, msg *types.MsgCreateWills) (*types.MsgCreateWillsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	var will = types.Will{
		Testatorname: msg.Testatorname,
		Testatorid: msg.Creator,
		Beneficiaries: msg.Beneficiaries,
		Assets: msg.Assets,
		Executorname: msg.Executorname,
		Executorid: msg.Executorid,
		Datecreated: msg.Datecreated,
		Timecreated: msg.Timecreated,
		Dateexecuted:msg.Dateexecuted,
		Timeexecuted: msg.Timeexecuted,
		Status : "Not Executed",
	}

	//get testator's address
	testator, _ := sdk.AccAddressFromBech32(msg.Creator)

	    // Get the fee as sdk.Coins (Fee is hardcoded)
		fee, err := sdk.ParseCoinsNormalized("500")
		if err != nil {
			panic(err)
		}

	// Use the module account to receve fees
	sdkError := k.bankKeeper.SendCoinsFromAccountToModule(ctx, testator, types.ModuleName, fee)
	if sdkError != nil {
		return nil, sdkError
	}

	k.AppendWill(
		ctx,
		will,
	)

	return &types.MsgCreateWillsResponse{}, nil
}
