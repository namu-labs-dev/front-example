import ToastStore from "~/store/ToastStore";

export function generateRandomString(length: number) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function isEmailValid(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}

export function formatWalletAddress(
  address: string,
  prefixLength = 5,
  suffixLength = 3,
) {
  return `${address.slice(0, prefixLength)}...${address.slice(-suffixLength)}`;
}

export function decodeUTF8(str: string) {
  const decoded = unescape(encodeURIComponent(str));
  const result = new Uint8Array(decoded.length);

  for (let i = 0; i < decoded.length; i++) {
    result[i] = decoded.charCodeAt(i);
  }

  return result;
}

export async function copyToClipboard(text: string, message?: string) {
  try {
    await navigator.clipboard.writeText(text);
    ToastStore.info(message ?? "Text copied to clipboard");
  } catch (err) {
    ToastStore.info("Failed to copy text to clipboard");
  }
}

export const getPasskeyCustomName = (accountLength: number) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alphabetLength = alphabet.length;
  const firstIndex = Math.floor(accountLength / alphabetLength);
  const secondIndex = accountLength % alphabetLength;
  return `Passkey ${firstIndex ? alphabet[firstIndex - 1] : ""}${
    alphabet[secondIndex]
  }`;
};

export const getNetworkNameByProtocol = (protocol: string) => {
  const networkName: Record<string, string> = {
    EVM: "Ethereum",
    SOLANA: "Solana",
  };

  return networkName[protocol];
};

export const getTxScanUrl = (targetChainId: number, txHash: string) => {
  targetChainId = Number(targetChainId);

  switch (targetChainId) {
    case 1:
      return `https://etherscan.io/tx/${txHash}`;
    case 11155111:
      return `https://sepolia.etherscan.io/tx/${txHash}`;
    case 11155420:
      return `https://sepolia-optimism.etherscan.io/tx/${txHash}`;
    case 1110:
      return `https://blockscout.nuralchain.org/tx/${txHash}`;
    default:
      return "/";
  }
};
