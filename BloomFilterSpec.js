// Create your tests for the hashTable here...
describe("BloomFilter", function() {
  var bloomFilter;

  beforeEach(function() {
    bloomFilter = new BloomFilter(20,0.1);
  });

  it('should have methods named "insert" and "retrieve', function() {
    expect(typeof bloomFilter.insert).toBe("function");
    expect(typeof bloomFilter.query).toBe("function");
  });

  it('should return true for entries that were inserted', function() {
    bloomFilter.insert('banana');
    expect(hashTable.query('banana')).toBe(true);
  });

  it('should return false for entries that were not inserted', function() {
    hashTable.insert('apple');
    expect(hashTable.query('grape')).toBe(false);
  });

});
