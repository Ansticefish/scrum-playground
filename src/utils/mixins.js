export const drag = {
  methods: {
    startDrag($event, item) {
      $event.dataTransfer.clearData()
      $event.dataTransfer.setData('application/json', JSON.stringify(item))
      item.isDragged = true
      console.log(drag)
    },
    endDrag(item) {
      item.isDragged = false
    }
  }
}

export const allowDrag = {
  methods: {
    allowDrag($event) {
      $event.preventDefault()
    }
  }
}

