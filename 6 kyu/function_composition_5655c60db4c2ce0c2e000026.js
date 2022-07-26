compose = (...func) => (initialVal) => func.reduceRight((val, fn) => fn(val), initialVal);
