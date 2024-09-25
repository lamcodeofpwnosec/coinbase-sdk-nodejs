import { Coinbase, Validator, ValidatorStatus } from "../..";

const apiKeyFilePath = "<YOUR_API_KEY_FILE_HERE>";

/**
 * List the validators you've provisioned on the `ethereum-holesky` testnet network.
 */
async function listValidators() {
  Coinbase.configureFromJson({ filePath: apiKeyFilePath });

  // Get the validators that you've provisioned for staking.
  const validators = await Validator.list(
    Coinbase.networks.EthereumHolesky,
    "eth",
    ValidatorStatus.PROVISIONED,
  );

  // Loop through the validators and print each validator
  validators.forEach(validator => {
    console.log(validator.toString());
  });
}

(async () => {
  await listValidators();
})();