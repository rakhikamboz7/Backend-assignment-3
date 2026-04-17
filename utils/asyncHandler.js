const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);  //if any error occurs in the async function, it will be caught and passed to next() which will trgger the gobal error handler
  };
};

export default asyncHandler;