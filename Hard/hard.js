function createPII(name, ssn) {
    const pii = {
      name: name,
      ssn: ssn
    };
  
    function getName() {
      return pii.name;
    }
  
    return getName;
  }
  
  const myPII = createPII('John Doe', '123-45-6789');
  
  console.log(myPII()); // "John Doe"