// Отримуємо доступ до полів input
const winInput = document.querySelector('.win');
const lossInput = document.querySelector('.loss');
const averageWinrateSpan = document.querySelector('.average-winrate');

// Функція для розрахунку середнього winrate
function calculateAverageWinrate() {
	const winValue = parseInt(winInput.value);
	const lossValue = parseInt(lossInput.value);

	if (isNaN(winValue) || isNaN(lossValue)) {
	averageWinrateSpan.textContent = '0%'; // Виводимо 0% якщо введені дані не коректні
	return;
	}

	const totalGames = winValue + lossValue;
	const winrate = (winValue / totalGames) * 100;
	averageWinrateSpan.textContent = Math.trunc(winrate.toFixed(2)) + '%';
}

// Викликаємо функцію для розрахунку середнього winrate при зміні значень в полях
winInput.addEventListener('input', calculateAverageWinrate);
lossInput.addEventListener('input', calculateAverageWinrate);