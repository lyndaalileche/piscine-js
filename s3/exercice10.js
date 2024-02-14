// Exercice 10: Exécuter des promesses en série
// Créez une liste de fonctions qui retournent des promesses
const tasks = [
  () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Tâche 1 terminée");
        resolve();
      }, 1000);
    });
  },
  () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Tâche 2 terminée");
        resolve();
      }, 2000);
    });
  },
  () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Tâche 3 terminée");
        resolve();
      }, 1500);
    });
  },
];

// Exécutez les promesses en série
async function executePromisesInSeries() {
  for (const task of tasks) {
    await task();
  }
  console.log("Toutes les tâches sont terminées !");
}

executePromisesInSeries();

