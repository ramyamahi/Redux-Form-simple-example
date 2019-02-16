import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"

class Carousel extends React.Component {
  state = {
    galleryItems: [1, 2, 3].map((i) => (<h2 key={i}>{i}</h2>)),
  }

  responsive = {
    0 : { items: 1 },
    768: {items: 2 },
    1024: { items: 3 },
  }

  onSlideChange(e) {
    console.debug('Item`s position during a change: ', e.item)
    console.debug('Slide`s position during a change: ', e.slide)
  }

  onSlideChanged(e) {
    console.debug('Item`s position after changes: ', e.item)
    console.debug('Slide`s position after changes: ', e.slide)
  }

  render() {
    //const handleOnDragStart = e => e.preventDefault()
    return (
      <React.Fragment>
        <AliceCarousel
          items={this.state.galleryItems}
          responsive={this.responsive}
          autoPlayInterval={2000}
          autoPlayDirection="ltr"
          autoPlay={true}
          fadeOutAnimation={false}
          mouseDragEnabled={true}
          playButtonEnabled={false}
          disableAutoPlayOnAction={true}
          dotsDisabled={true}
          onSlideChange={this.onSlideChange}
          onSlideChanged={this.onSlideChanged}
          buttonsDisabled={true}
        />
        {/*<AliceCarousel mouseDragEnabled responsive={this.responsive}
        autoPlayInterval={2000}
          autoPlayDirection="ltr"
          autoPlay={true}
          fadeOutAnimation={false}
          mouseDragEnabled={true}
          playButtonEnabled={false}
          disableAutoPlayOnAction={true}
          dotsDisabled={true}
          onSlideChange={this.onSlideChange}
          onSlideChanged={this.onSlideChanged}
          buttonsDisabled={true}>
      <img src="/img1" onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img src="/img2" onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img src="/img3" onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img src="/img4" onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img src="/img5" onDragStart={handleOnDragStart} className="yours-custom-class" />
    </AliceCarousel>*/}
      </React.Fragment>
    )
  }
}

export default Carousel;