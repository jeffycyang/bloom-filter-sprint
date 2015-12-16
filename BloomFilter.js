var BloomFilter = function(n, p) {
  // Initialize storage.
  this.storage = [];
  // Calculate the optimal set size.
  this.m = (-1) * (n * Math.log(p)) / (Math.pow(Math.log(2), 2));
  // Calculate the optimal number of hash functions.
  this.k = (this.m / n) * Math.log(2);

  // Initiliaze all m storage values to 0
  for (var j = 0; j < this.m; j++) {
    this.storage[j] = 0;
  }

  /**
   DO NOT EDIT THE CODE BETWEEN THE ASTERISKS
   This storage and for-loop, will create your 'k' hash functions
   **/
  /**************************************/

  // Object to store functions.
  this.hash = {};

  for (var i = 0; i < this.k; i++) {
    this.hash[i] = new Hash(i, this.m);
  } 

  /**************************************/

};

BloomFilter.prototype.insert = function(entry) {
  for (var fxn in this.hash) {
    var i = this.hash[fxn].index(entry);
    this.storage[i] = 1;
  }
};

BloomFilter.prototype.query = function(entry) {
  for (var fxn in this.hash) {
    var i = this.hash[fxn].index(entry);
    if (this.storage[i] === 0) {
        return false;
    }
  }
  return true;
};

/**
 DO NOT EDIT THE CODE BEWTEEN THE ASTERISKS
 This is a Hash function class, don't worry about what it does, just know
 that it will return to you a hash function that converts a string into an
 integer with near uniform-distribution between 0 and 'max' 
 **/
/**************************************/

var Hash = function(magic, max) {
    this.magic = magic;
    this.max = max;
};

// This method will return an index between 0 and 'max' for a given key
Hash.prototype.index = function (key) {
  var salt = 5381;
  for (var i = 0; i < key.length; i++) {
    salt = salt * this.magic + key.charCodeAt(i);
  }

  return Math.floor(salt % this.max);
};

/**************************************/

/** 
 Credit to Cory Dang for his hash function class 
 **/
