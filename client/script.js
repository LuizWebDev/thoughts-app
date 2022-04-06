const h1 = document.querySelector('h1')
const div = document.querySelector('#container')
const form = document.createElement('form')

const createForm = () => {
    div.removeChild(h1)
    
//creating title input and label
    const titleLabel = document.createElement('label')
    titleLabel.htmlFor = 'title'
    titleLabel.innerText = 'Title'
    titleLabel.className = 'hidden'
    form.append(titleLabel)

    const titleInput = document.createElement('input')
    titleInput.id = 'title'
    titleInput.name = 'title'
    titleInput.type = 'text'
    titleInput.placeholder = 'Title'
    form.append(titleInput)

//creating name label and input
    const nameLabel = document.createElement('label')
    nameLabel.htmlFor = 'name'
    nameLabel.className = 'hidden'
    nameLabel.innerText = 'Your name'
    form.append(nameLabel)

    const nameInput = document.createElement('input')
    nameInput.id = 'name'
    nameInput.name = 'name'
    nameInput.type = 'text'
    nameInput.placeholder = 'Your name'
    form.append(nameInput)

//creating thoughts label and input
    const thoughtsLabel = document.createElement('label')
    thoughtsLabel.htmlFor = 'thoughts'
    thoughtsLabel.className = 'hidden'
    thoughtsLabel.innerText = 'Your thoughts'
    form.append(thoughtsLabel)

    const thoughts = document.createElement('textarea')
    thoughts.id = 'thoughts'
    thoughts.placeholder = 'Your thoughts'
    thoughts.name = 'thoughts'
    thoughts.cols = 30
    thoughts.rows = 5
    form.append(thoughts)

//creating button
    const button = document.createElement('button')
    button.id = 'purge'
    button.innerText = 'Purge'
    form.append(button)
    
    div.append(form)
}


h1.addEventListener('click', createForm)



