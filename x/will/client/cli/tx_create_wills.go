package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"willstorage/x/will/types"
)

var _ = strconv.Itoa(0)

func CmdCreateWills() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-wills [testatorname] [testatorid] [beneficiaries] [assets] [executorname] [executorid] [datecreated] [timecreated] [dateexecuted] [timeexecuted]",
		Short: "Broadcast message create-wills",
		Args:  cobra.ExactArgs(10),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argTestatorname := args[0]
			argTestatorid := args[1]
			argBeneficiaries := args[2]
			argAssets := args[3]
			argExecutorname := args[4]
			argExecutorid := args[5]
			argDatecreated := args[6]
			argTimecreated := args[7]
			argDateexecuted := args[8]
			argTimeexecuted := args[9]
			argStatus := args[10]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateWills(
				clientCtx.GetFromAddress().String(),
				argTestatorname,
				argTestatorid,
				argBeneficiaries,
				argAssets,
				argExecutorname,
				argExecutorid,
				argDatecreated,
				argTimecreated,
				argDateexecuted,
				argTimeexecuted,
				argStatus,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
