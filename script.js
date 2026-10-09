
const habitInputs = document.querySelectorAll('.habit input');
const progressCount = document.getElementById('progress-count');

// Atualiza a quantidade de hábitos marcados
function updateProgress() {
  const checked = document.querySelectorAll(
    '.habit input:checked'
  ).length;

  progressCount.textContent = checked;
}

// Detecta quando um hábito é marcado ou desmarcado
habitInputs.forEach((input) => {
  input.addEventListener('change', updateProgress);
});

updateProgress();

// Etapas da minha rotina diária
const rotina = [
  'Acordar',
  'Tomar banho',
  'Tomar café da manhã',
  'Trocar de roupa',
  'Escovar os dentes',
  'Ir para a escola ou trabalho',
  'Sair da escola ou do trabalho',
  'Ir para a academia',
  'Jantar',
  'Assistir a um filme',
  'Dormir'
];

console.log('Algoritmo da Minha Vida');

rotina.forEach((atividade, indice) => {
  console.log(`${indice + 1}. ${atividade}`);
});
