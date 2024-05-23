import { v1, v4, v1_ASC, sortUUIDs } from './uuid';
import { describe, it , expect} from 'bun:test'

describe('UUID', () => {

  describe('v4', () => {
    it('should generate a version 4 UUID', () => {
      const uuid = v4();
      expect(uuid).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/);
    });
  });

  describe('sortUUIDs', () => {
    it('should sort an array of UUIDs in ascending order', () => {
      const uuids = ['f5a3', 'b2c1', 'd4e2', 'a1b0'];
      const sortedUUIDs = sortUUIDs(uuids);
      expect(sortedUUIDs).toEqual(['a1b0', 'b2c1', 'd4e2', 'f5a3']);
    });
  });
});