package will_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "willstorage/testutil/keeper"
	"willstorage/testutil/nullify"
	"willstorage/x/will"
	"willstorage/x/will/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		WillList: []types.Will{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		WillCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.WillKeeper(t)
	will.InitGenesis(ctx, *k, genesisState)
	got := will.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.WillList, got.WillList)
	require.Equal(t, genesisState.WillCount, got.WillCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
