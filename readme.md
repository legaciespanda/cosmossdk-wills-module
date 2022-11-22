# willstorage
**willstorage** is a blockchain built using Cosmos SDK and Tendermint and created with [Ignite CLI](https://ignite.com/cli).

## Get started

```
ignite chain serve
```

`serve` command installs dependencies, builds, initializes, and starts your blockchain in development.

### Blockchain enabled Wills

The digital economy, as we know it today, like credit card information and financial records are stored on centralized databases. The inherent nature of these is such that they are opaque and vulnerable to hacking

Blockchain — the ingenious invention — store information in a decentralized form where information is parceled up in blocks. The data is distributed in the peer-to-peer network giving its access to everyone on the Blockchain. If anyone adds new block to this chain, every one of the network is notified and has a copy. What makes the distributed ledger so attractive is their resistance to modification, transparency and security. Any changes in the transactions are easily flagged by the system. Blockchain does not require third-parties for transactions which reduces financial costs. Blockchain is the technology behind digital currencies which are popularly known s cryptocurrencies are formed on the basis of cryptography.

According to the Wall Street Blockchain Alliance, the legal industry is one of the fastest growing sectors when it comes to Blockchain. Blockchain, being un-hackable, makes it attractive for storing information and documents. The ‘Proof of existence’ which acts as a public notary that demonstrates data ownership and examines the integrity of the document makes verification easier. Lawyers are freed from trivial tasks and hence, can leverage more time on legal insights. It helps them draft contracts, store data on transactions and make authentication easier. 

### Traditonal Will Method

- Design own Will or hiring a lawyer
- List down beneficiaries and assets
- Select the executor of the will
- Two withnesses signs the will
- Place will securely either at home or the bank
- Give copy to executor or inform about its location

### Blockchain Will Method
- Testator lists down beneficiaries on the Willstorage blockchain network
- Beneficiaries and testator secured via crypto address to ensure privacy
- Any changes in the Will would be flagged by the system to avoid temparing
- Executor post the death of the testator, Will is automatically executed

### Wills List Data Structure
Wills is stored as array data type in the blockchain.

-  uint64 id = 1;
-  string testatorname = 2; 
-  string testatorid = 3; 
-  string beneficiaries = 4; 
-  string assets = 5; 
-  string executorname = 6; 
-  string executorid = 7; 
-  string datecreated = 8; 
-  string timecreated = 9; 
-  string dateexecuted = 10; 
-  string timeexecuted = 11; 
- string status = 12

### Wills Message CreateWills Data Structure
States modifies the state machine allowing storing Wills information to the blockchain via keepers

-  string creator = 1;
-  string testatorname = 2;
-  string testatorid = 3;
-  string beneficiaries = 4;
-  string assets = 5;
-  string executorname = 6;
-  string executorid = 7;
-  string datecreated = 8;
-  string timecreated = 9;
-  string dateexecuted = 10;
-  string timeexecuted = 11;
- string status = 12

### Creating a new using CMD line
```willstoraged tx will create-wills [testatorname] [testatorid] [beneficiaries] [assets] [executorname] [executorid] [datecreated] [timecreated] [dateexecuted] [timeexecuted] [status] [flags] --from your-account-name```


## Fees & Transaction
For storing Wills on the blockchain, the testator is charged a fee



## Learn more

- [Ignite CLI](https://ignite.com/cli)
- [Tutorials](https://docs.ignite.com/guide)
- [Ignite CLI docs](https://docs.ignite.com)
- [Cosmos SDK docs](https://docs.cosmos.network)
- [Developer Chat](https://discord.gg/ignite)
