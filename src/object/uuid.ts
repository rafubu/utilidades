


/**
 * Generates a version 1 UUID (Universally Unique Identifier) based on the current timestamp.
 * @returns The generated UUID.
 */
export function v1(): string {
  // Generate timestamp
  const timestamp = Date.now();
  const timestampHex = timestamp.toString(16).padStart(12, '0');

  // Generate clock sequence
  const clockSequence = (Math.random() * 0x3fff) | 0; // Random 14-bit sequence number
  const clockSequenceHex = clockSequence.toString(16).padStart(4, '0');

  // Generate node identifier
  const node = Array.from({ length: 6 }, () => Math.floor(Math.random() * 256));
  const nodeHex = node.map(byte => byte.toString(16).padStart(2, '0')).join('');

  // Construct the UUID from the parts
  const uuid = `${timestampHex.slice(0, 8)}-${timestampHex.slice(8)}-${(1 << 12).toString(16)}${timestampHex.slice(8, 12)}-${clockSequenceHex}-${nodeHex}`;
  return uuid;
}

/**
 * Generates a version 4 UUID (Universally Unique Identifier) using random values.
 * @returns The generated UUID.
 */
export function v4(): string {
  // Get random values
  const crypto = typeof window !== 'undefined' && (window.crypto || (window as any).msCrypto);
  const getRandomValues = crypto ? crypto.getRandomValues.bind(crypto) : (arr: Uint8Array) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = Math.floor(Math.random() * 256);
    }
    return arr;
  };
  const rnds = getRandomValues(new Uint8Array(16));

  // Set the version to 4 (0b0100xxxx)
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  // Set the variant to RFC 4122 (0b10xxxxxx)
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Convert to hexadecimal string
  const hex = Array.from(rnds).map(b => b.toString(16).padStart(2, '0')).join('');

  // Construct the UUID from the parts
  return `${hex.substr(0, 8)}-${hex.substr(8, 4)}-${hex.substr(12, 4)}-${hex.substr(16, 4)}-${hex.substr(20, 12)}`;
}

/**
 * Generates a version 1 ordered UUID (Universally Unique Identifier) based on the current timestamp.
 * @returns The generated UUID.
 */
export function v1_ASC(): string {
  // Generate timestamp
  const timestamp = Date.now();
  const timestampHex = timestamp.toString(16).padStart(12, '0');

  // Generate clock sequence
  const clockSequence = (Math.random() * 0x3fff) | 0; // Random 14-bit sequence number
  const clockSequenceHex = clockSequence.toString(16).padStart(4, '0');

  // Generate node identifier
  const node = Array.from({ length: 6 }, () => Math.floor(Math.random() * 256));
  const nodeHex = node.map(byte => byte.toString(16).padStart(2, '0')).join('');

  // Construct the UUID from the parts
  const uuid = `${timestampHex.slice(0, 8)}${timestampHex.slice(8)}${(1 << 12).toString(16).padStart(3, '0')}${clockSequenceHex.slice(0, 1)}${clockSequenceHex.slice(1)}${nodeHex}`;
  return uuid;
}

export function v1_DESC(): string {
  const timestamp = Date.now();
  const timestampHex = timestamp.toString(16).padStart(12, '0');
  const reversedTimestampHex = timestampHex.split('').reverse().join('');

  const clockSequence = (Math.random() * 0x3fff) | 0; // Random 14-bit sequence number
  const clockSequenceHex = clockSequence.toString(16).padStart(4, '0');

  // Generate a random 48-bit node identifier (similar to a MAC address)
  const node = Array.from({ length: 6 }, () => Math.floor(Math.random() * 256));
  const nodeHex = node.map(byte => byte.toString(16).padStart(2, '0')).join('');

  // Construct the UUID from the parts
  const uuid = `${reversedTimestampHex.slice(0, 8)}${reversedTimestampHex.slice(8)}${(1 << 12).toString(16).padStart(3, '0')}${clockSequenceHex.slice(0, 1)}${clockSequenceHex.slice(1)}${nodeHex}`;
  return uuid;
}

export function sortUUIDsInverse(uuids: string[]): string[] {
  return uuids.sort((a, b) => a.localeCompare(b)).reverse();
}

/**
 * Sorts an array of UUIDs in ascending order.
 * @param uuids - The array of UUIDs to sort.
 * @returns The sorted array of UUIDs.
 */
export function sortUUIDs(uuids: string[]): string[] {
  return uuids.sort();
}
