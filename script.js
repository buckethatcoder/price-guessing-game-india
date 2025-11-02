// Game state
let currentCategory = '';
let currentRound = 0;
let totalRounds = 5;
let score = 0;
let products = [];
let currentProduct = null;

// DOM elements
const categoryScreen = document.getElementById('categoryScreen');
const gameScreen = document.getElementById('gameScreen');
const finalScreen = document.getElementById('finalScreen');
const categoryButtons = document.querySelectorAll('.category-btn');
const productImage = document.getElementById('productImage');
const platformBadge = document.getElementById('platformBadge');
const priceInput = document.getElementById('priceInput');
const submitGuessBtn = document.getElementById('submitGuess');
const guessSection = document.getElementById('guessSection');
const resultSection = document.getElementById('resultSection');
const resultMessage = document.getElementById('resultMessage');
const userGuessEl = document.getElementById('userGuess');
const actualPriceEl = document.getElementById('actualPrice');
const productNameEl = document.getElementById('productName');
const productDescriptionEl = document.getElementById('productDescription');
const nextRoundBtn = document.getElementById('nextRound');
const scoreEl = document.getElementById('score');
const roundEl = document.getElementById('round');
const finalScoreEl = document.getElementById('finalScore');
const performanceEl = document.getElementById('performance');
const playAgainBtn = document.getElementById('playAgain');

// Event listeners
categoryButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    currentCategory = btn.dataset.category;
    startGame();
  });
});

submitGuessBtn.addEventListener('click', submitGuess);
priceInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') submitGuess();
});

nextRoundBtn.addEventListener('click', nextRound);
playAgainBtn.addEventListener('click', resetGame);

// Game functions
function startGame() {
  currentRound = 0;
  score = 0;
  products = getRandomProducts(currentCategory, totalRounds);
  
  categoryScreen.classList.remove('active');
  gameScreen.classList.add('active');
  
  nextRound();
}

function nextRound() {
  if (currentRound >= totalRounds) {
    showFinalScreen();
    return;
  }
  
  currentRound++;
  currentProduct = products[currentRound - 1];
  
  // Update UI
  roundEl.textContent = `${currentRound}/${totalRounds}`;
  scoreEl.textContent = score;
  productImage.src = currentProduct.image;
  platformBadge.textContent = currentProduct.platform;
  priceInput.value = '';
  
  // Show guess section, hide result
  guessSection.style.display = 'block';
  resultSection.classList.add('hidden');
  priceInput.focus();
}

function submitGuess() {
  const userGuess = parseInt(priceInput.value);
  
  if (!userGuess || userGuess <= 0) {
    alert('Please enter a valid price!');
    return;
  }
  
  const actualPrice = currentProduct.price;
  const difference = Math.abs(userGuess - actualPrice);
  const percentDiff = (difference / actualPrice) * 100;
  
  // Calculate points (max 100 per round)
  let points = 0;
  let message = '';
  let messageClass = '';
  
  if (percentDiff <= 5) {
    points = 100;
    message = '🎯 Perfect! Amazing guess!';
    messageClass = 'correct';
  } else if (percentDiff <= 15) {
    points = 75;
    message = '👍 Very close! Great job!';
    messageClass = 'close';
  } else if (percentDiff <= 30) {
    points = 50;
    message = '👌 Not bad! Getting there!';
    messageClass = 'close';
  } else if (percentDiff <= 50) {
    points = 25;
    message = '🤔 Quite off, but nice try!';
    messageClass = 'far';
  } else {
    points = 10;
    message = '😅 Way off! Better luck next time!';
    messageClass = 'far';
  }
  
  score += points;
  
  // Show result
  guessSection.style.display = 'none';
  resultSection.classList.remove('hidden');
  resultMessage.textContent = message;
  resultMessage.className = `result-message ${messageClass}`;
  userGuessEl.textContent = `₹${userGuess.toLocaleString('en-IN')}`;
  actualPriceEl.textContent = `₹${actualPrice.toLocaleString('en-IN')}`;
  productNameEl.textContent = currentProduct.name;
  productDescriptionEl.textContent = currentProduct.description;
  scoreEl.textContent = score;
}

function showFinalScreen() {
  gameScreen.classList.remove('active');
  finalScreen.classList.add('active');
  
  const maxScore = totalRounds * 100;
  finalScoreEl.textContent = `${score}/${maxScore}`;
  
  let performance = '';
  const percentage = (score / maxScore) * 100;
  
  if (percentage >= 80) {
    performance = '🏆 Outstanding! You\'re a price expert!';
  } else if (percentage >= 60) {
    performance = '🌟 Great job! You know your prices well!';
  } else if (percentage >= 40) {
    performance = '👍 Good effort! Keep practicing!';
  } else {
    performance = '💪 Nice try! You\'ll do better next time!';
  }
  
  performanceEl.textContent = performance;
}

function resetGame() {
  finalScreen.classList.remove('active');
  categoryScreen.classList.add('active');
  currentCategory = '';
  currentRound = 0;
  score = 0;
  products = [];
  currentProduct = null;
}

// Initialize
priceInput.focus();