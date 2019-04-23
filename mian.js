const content = document.querySelector('.content')
const boxList = document.querySelectorAll('.box')

content.addEventListener('dragstart', event => {
  content.classList.add('is-draging')
  event.dataTransfer.setData('id', content.id)
})

content.addEventListener('drag', event => {
  //   content.classList.add('is-draging')
})

content.addEventListener('dragend', event => {
  content.classList.remove('is-draging')
})

boxList.forEach(box => {
  box.addEventListener('click', () => {
    console.log('click')
  })

  box.addEventListener('dragenter', event => {
    event.preventDefault()
    box.classList.add('is-enter')
  })

  box.addEventListener('dragover', event => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'copy'
  })

  box.addEventListener('dragleave', event => {
    event.preventDefault()
    box.classList.remove('is-enter')
  })

  box.addEventListener('drop', event => {
    event.preventDefault()

    console.log('event :', event.dataTransfer.dropEffect)

    const id = event.dataTransfer.getData('id')

    box.append(document.getElementById(id))

    box.classList.remove('is-enter')
  })
})
