package keeper

import (
	"encoding/binary"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"willstorage/x/will/types"
)

// GetWillCount get the total number of will
func (k Keeper) GetWillCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.WillCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetWillCount set the total number of will
func (k Keeper) SetWillCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.WillCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendWill appends a will in the store with a new id and update the count
func (k Keeper) AppendWill(
	ctx sdk.Context,
	will types.Will,
) uint64 {
	// Create the will
	count := k.GetWillCount(ctx)

	// Set the ID of the appended value
	will.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WillKey))
	appendedValue := k.cdc.MustMarshal(&will)
	store.Set(GetWillIDBytes(will.Id), appendedValue)

	// Update will count
	k.SetWillCount(ctx, count+1)

	return count
}

// SetWill set a specific will in the store
func (k Keeper) SetWill(ctx sdk.Context, will types.Will) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WillKey))
	b := k.cdc.MustMarshal(&will)
	store.Set(GetWillIDBytes(will.Id), b)
}

// GetWill returns a will from its id
func (k Keeper) GetWill(ctx sdk.Context, id uint64) (val types.Will, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WillKey))
	b := store.Get(GetWillIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveWill removes a will from the store
func (k Keeper) RemoveWill(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WillKey))
	store.Delete(GetWillIDBytes(id))
}

// GetAllWill returns all will
func (k Keeper) GetAllWill(ctx sdk.Context) (list []types.Will) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WillKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Will
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetWillIDBytes returns the byte representation of the ID
func GetWillIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetWillIDFromBytes returns ID in uint64 format from a byte array
func GetWillIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
