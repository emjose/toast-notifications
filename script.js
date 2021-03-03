const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'Sea Salt and Lemon',
    'Cherry Tomatoes, Basil, Balsamic Vinegar',
    'Smoked Salmon and Goat Cheese',
    'Buttered Corn, Cotija Cheese, Red Pepper Flakes',
    'Crispy Baked Cauliflower, Diced Red Onions',
    'Fried Egg and Ground Pepper',
    'Poached Eggs and Banana Peppers',
    'Radishes, Jalapenos, Scallions, Red Pepper Flakes',
    'Cream Cheese and Sea Salt',
    'Almonds and Smoked Olive Oil',
    'Bacon and Goat Cheese',
    'Salsa and Crushed Tortilla Chips',
    'Soft Boiled Egg and Curry Powder',
    'Strawberries and Balsamic Vinegar',
    'Feta Cheese and Scallions',
    'Corn Salad and Lime'
]

const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : getRandomType())

    notif.innerText = message ? message : getRandomMessage()

    toasts.appendChild(notif)

// 3.75 seconds
    setTimeout(() => {
        notif.remove()
    }, 3750)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}