package will

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"willstorage/x/will/keeper"
	"willstorage/x/will/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the will
	for _, elem := range genState.WillList {
		k.SetWill(ctx, elem)
	}

	// Set will count
	k.SetWillCount(ctx, genState.WillCount)
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.WillList = k.GetAllWill(ctx)
	genesis.WillCount = k.GetWillCount(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
