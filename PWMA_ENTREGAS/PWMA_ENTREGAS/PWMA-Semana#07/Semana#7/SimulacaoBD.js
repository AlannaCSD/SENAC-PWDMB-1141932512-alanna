// Simulação de um banco de dados de eventos
const eventDatabase = [
  {
    id: 1,
    nome: 'Conferência de Tecnologia',
    data: '2023-10-15',
    localizacao: 'Centro de Convenções',
    participantes: ['Freelancer1', 'Cliente1', 'Cliente2'],
  },
  {
    id: 2,
    nome: 'Workshop de Marketing',
    data: '2023-11-02',
    localizacao: 'Sala de Reuniões A',
    participantes: ['Freelancer2', 'Cliente3'],
  },
  {
    id: 3,
    nome: 'Festa de Lançamento',
    data: '2023-12-20',
    localizacao: 'Clube Noturno',
    participantes: ['Freelancer3', 'Cliente4', 'Cliente5', 'Cliente6'],
  },
];

// Função para listar todos os eventos
function listarEventos() {
  return eventDatabase;
}

// Função para encontrar um evento pelo ID
function encontrarEventoPorId(id) {
  return eventDatabase.find(evento => evento.id === id);
}

// Exemplo de uso das funções
console.log("Lista de todos os eventos:");
console.log(listarEventos());

const eventoEncontrado = encontrarEventoPorId(2);
console.log("\nEvento encontrado pelo ID 2:");
console.log(eventoEncontrado);
