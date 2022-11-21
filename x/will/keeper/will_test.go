package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	keepertest "willstorage/testutil/keeper"
	"willstorage/testutil/nullify"
	"willstorage/x/will/keeper"
	"willstorage/x/will/types"
)

func createNWill(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Will {
	items := make([]types.Will, n)
	for i := range items {
		items[i].Id = keeper.AppendWill(ctx, items[i])
	}
	return items
}

func TestWillGet(t *testing.T) {
	keeper, ctx := keepertest.WillKeeper(t)
	items := createNWill(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetWill(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestWillRemove(t *testing.T) {
	keeper, ctx := keepertest.WillKeeper(t)
	items := createNWill(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveWill(ctx, item.Id)
		_, found := keeper.GetWill(ctx, item.Id)
		require.False(t, found)
	}
}

func TestWillGetAll(t *testing.T) {
	keeper, ctx := keepertest.WillKeeper(t)
	items := createNWill(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllWill(ctx)),
	)
}

func TestWillCount(t *testing.T) {
	keeper, ctx := keepertest.WillKeeper(t)
	items := createNWill(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetWillCount(ctx))
}
