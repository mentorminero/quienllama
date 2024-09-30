const accumulator = (event, context) => {
  // Iniciar el acumulador si no existe
  if (!context.clientContext || !context.clientContext.user) {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Not authenticated.' }),
    };
  }

  const randomNumber = Math.floor(Math.random() * (9 - 7 + 1)) + 7; // Genera un número entre 7 y 9
  // Aquí puedes guardar el número en un almacenamiento persistente (como una base de datos)

  // Simulamos un almacenamiento en memoria solo para ilustrar
  if (!context.clientContext.storage) {
    context.clientContext.storage = 0;
  }

  context.clientContext.storage += randomNumber;

  return {
    statusCode: 200,
    body: JSON.stringify({ total: context.clientContext.storage }),
  };
};

export { accumulator };
