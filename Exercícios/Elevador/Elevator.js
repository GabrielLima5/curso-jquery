class Elevator{
    constructor(){
        this.$elevator = $('.elevator')
        this.$display = $('.display')
        this.floorQtd = 3
        this.isMovement = false
        this.queue = []
        this.initCamera()
        this.initEvents()
    }

    initCamera(){
        navigator.mediaDevices.getUserMedia({
            video: true
        }).then(stream => {
            let video = this.$elevator.find('.camera')[0]
            video.srcObject = stream
        }).catch(err => {
            console.error(err)
        })
    }

    initEvents(){
        $('.buttons .btn').on('click', e => {
            this.goToFloor($(e.target).data('floor'))
            $(e.target).addClass('floor-selected')
        })
    }

    openDoor(){
        return new Promise((resolve, reject) => {
            if (!this.isDoorOpen()){
                this.$elevator.find('.door').addClass('open')
                this.transitionEnd(() => resolve())
            } else {
                resolve()
            }
        })
    }

    closeDoor(){
        return new Promise((resolve, reject) => {
            if (this.isDoorOpen()){
                this.$elevator.find('.door').removeClass('open')
                setTimeout(() => {
                     resolve()
                }, 1500)
            } else {
                resolve()
            }
        })
    }

    isDoorOpen(){
        return this.$elevator.find('.door').hasClass('open')
    }

    setDisplay(floor){
        this.$display.text(floor)
    }

    transitionEnd(callback){
        this.$elevator.on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', () => {
            callback()
        });
    }

    goToFloor(number){
        if (!this.isMovement){
            this.isMovement = true
            this.closeDoor().then(() => {
                new Promise((resolve, reject) => {
                    let currentFloor =  this.$elevator.data('floor')
                    if (number !== currentFloor){
                        this.removeFloorClasses()
                        this.$elevator.addClass(`floor${number}`)

                        this.$elevator.data('floor', number)
                
                        let diff = number - currentFloor
                        let time = diff * 2
                        this.$elevator.css('-webkit-transition-duration', `${time}s`)
                        this.transitionEnd(() => resolve())
                    } else {
                        resolve()
                    }
                }).then(() => { 
                    this.setDisplay(number)
                    this.openDoor().then(() => {
                        $(`.button${number}`).removeClass('floor-selected')                
                        this.isMovement = false

                        setTimeout(() => {
                            this.closeDoor()
                        }, 3000)

                        setTimeout(() => {
                            if (this.queue.length){
                                let newFloor = this.queue.shift()
                                this.goToFloor(newFloor)
                            }
                        }, 2000)
                    })
                })
            })
        } else {
            this.queue.push(number)
        }
    }

    removeFloorClasses(){
        for(let i = 1; i <= this.floorQtd; i++){
            this.$elevator.removeClass(`floor${i}`)
        }
    }
}