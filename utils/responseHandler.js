exports.Response = (res, message, status_code, data) => {
  return res.status(status_code).send({
    status_code: status_code,
    message: message,
    data: data || [],
  });
};

