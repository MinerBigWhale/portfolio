import React from 'react';
import "../assets/styles/Site.scss";
export class MediaSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: -1,
        }
    }
    componentDidMount() {
    }

    componentDidUpdate() {
        if(this.props.selectedImg > -1 && this.state.slideIndex < 0) this.onImageClick(this.props.selectedImg);
    }
    openModal() {
        document.getElementById("myModal").style.display = "block";
    }

    closeModal() {
        document.getElementById("myModal").style.display = "none";
        this.state.slideIndex = -1;
        this.setState();
        this.props.onClose();
    }

    plusSlides(event) {
        const n = Number(this.state.slideIndex) + Number(event.target.id);
        this.state.slideIndex = n;
        this.setState();
        this.showSlides(n);
    }

    currentSlide(n) {
        this.setState({slideIndex: n});
        this.showSlides(this.state.slideIndex = n);
    }

    onImageClick(x) {
        this.openModal();
        this.currentSlide(x);
    }

    showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        if (n >= slides.length) { 
            this.state.slideIndex = 0;
            this.setState();
         }
        if (n < 0) { 
            this.state.slideIndex = slides.length - 1;
            this.setState();
        }
        if(slides.length > 0) {

            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[this.state.slideIndex].style.display = "block";
        }
    }
    render() {
        return (
            <div id="myModal" className="modal">
                <span className="close cursor crossStyle" onClick={this.closeModal.bind(this)}>&times;</span>
                <div className="modal-content">
                    {
                        this.props.imageList.map((val, key) => (
                            <div className="mySlides">
                                <img src={val} className="mediaCustomWidth" />
                            </div>
                        ))
                    }    
                </div>
                <a className="crossStyle prev" onClick={this.plusSlides.bind(this)} id="-1">&#10094;</a>
                <a className="crossStyle next" onClick={this.plusSlides.bind(this)} id="1">&#10095;</a>
            </div>

        )
    }
}