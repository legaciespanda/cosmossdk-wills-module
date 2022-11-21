package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "willstorage/testutil/keeper"
	"willstorage/x/will/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.WillKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
