function status(request, response) {
  response.status(200).json({ chave: "oiii" });
}

export default status;
