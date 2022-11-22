package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"time"
)

const TypeMsgCreateWills = "create_wills"

var _ sdk.Msg = &MsgCreateWills{}

func NewMsgCreateWills(creator string, testatorname string, testatorid string, beneficiaries string, assets string, executorname string, executorid string, datecreated string, timecreated string, dateexecuted string, timeexecuted string, status string) *MsgCreateWills {
	return &MsgCreateWills{
		Creator:       creator,
		Testatorname:  testatorname,
		Testatorid:    testatorid,
		Beneficiaries: beneficiaries,
		Assets:        assets,
		Executorname:  executorname,
		Executorid:    executorid,
		Datecreated:   datecreated,
		Timecreated:   timecreated,
		Dateexecuted:  dateexecuted,
		Timeexecuted:  timeexecuted,
		Status: status,
	}
}

func (msg *MsgCreateWills) Route() string {
	return RouterKey
}

func (msg *MsgCreateWills) Type() string {
	return TypeMsgCreateWills
}

func (msg *MsgCreateWills) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateWills) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateWills) ValidateBasic() error {
	testatorid, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid testator address (%s)", err)
	}
	if len(testatorid) == 0 {
        return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "testator ID is empty")
    }


	testatorname := msg.Testatorname

    if len(testatorname) == 0  {
        return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Testatorname is empty")
    }

	// testatorid, error := sdk.AccAddressFromBech32(msg.Testator)
    // if error != nil{
    //     return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "Invalid testator ID")
    // }
    // if testatorid.Empty() {
    //     return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "amount is empty")
    // }

	beneficiaries := msg.Beneficiaries

    if len(beneficiaries) == 0  {
        return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Beneficiaries name is empty")
    }

	assets := msg.Assets

    if len(assets) == 0 {
        return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Assets name is empty")
    }

	executorname := msg.Executorname

    if len(executorname) == 0  {
        return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Execurtor name is empty")
    }

	executorid, error := sdk.AccAddressFromBech32(msg.Executorid)
    if error != nil{
        return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "Invalid execurot ID")
    }
    if executorid.Empty() {
        return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "executor ID is empty")
    }

	datecreated := msg.Datecreated
	_, err = time.Parse("01/02/2006", datecreated)
	if err != nil{
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "Date created is not valid. Must be in the format 01/02/2006 (%s)", err)
	}

    if len(datecreated) == 0  {
        return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Date created is empty")
    }


	timecreated := msg.Timecreated
	if len(timecreated) == 0  {
        return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Time created is empty")
    }


	dateexecuted := msg.Dateexecuted
	_, error = time.Parse("01/02/2006", dateexecuted)
	if error != nil{
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "Date executed is not valid. Must be in the format 01/02/2006 (%s)", err)
	}

    if len(dateexecuted) == 0  {
        return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Date executed is empty")
    }


	timeexecuted := msg.Timeexecuted
	if len(timeexecuted) == 0  {
        return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Time executed is empty")
    }

	return nil
}
