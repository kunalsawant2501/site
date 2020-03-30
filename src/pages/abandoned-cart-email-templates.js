import React from 'react'
import Scrollspy from 'react-scrollspy'
import Layout from '../components/layout'
import Container from '../components/container'
import Row from '../components/row'
import Col from '../components/column'
import Modal from '../components/modal'
import Metatags from "../components/Metatags"

import FeaturedTemplates from '../constants/templates/featuredTemplates'
import FashionTemplates from '../constants/templates/fashionTemplates'
import SportsTemplates from '../constants/templates/sportsTemplates'
import BeautyAndPersonalCareTemplates from '../constants/templates/beauty-and-personal-care'
import ElectronicTemplates from '../constants/templates/electronic'
import FoodTemplates from '../constants/templates/food'
import FurnitureInteriorAndDIYTemplate from '../constants/templates/furniture-interior-and-diy'
import PersonalWearTemplate from '../constants/templates/personal-wear'
import TravelTemplates from '../constants/templates/travel'

class Templates extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        show: false,
        modalImg: ''
      }
    }
  
    showModal = () => {
      this.setState({ show: true });
    }
    
    hideModal = () => {
      this.setState({ show: false });
    }

  loadImageModal = (Img) => {
      console.log(Img);
        this.setState({
          modalImg: Img
        });
      this.showModal();
    };

  render() {
    return (
      <Layout className="templates-list-wrapper">
      <Metatags
        title="Abandoned Cart Email Templates"
        description="Checkout abandoned cart recovery email templates in this page. Send cart recovery emails to recover lost sales and grow your store revenue."
        keywords="abandoned cart email templates, shopify abandoned cart email templates, woocommerce abandoned cart email templates"
      />
        <Container>
          <Modal show={this.state.show} handleClose={this.hideModal} >
            <div>
              <img src={this.state.modalImg} className="img-responsive" />
            </div>
          </Modal>
          <div className="template-container">
            <Row className="my-2" className="">
              <Col size="3">
                <div className="aside-menu">
                  <h4 className="py-2">Industries</h4>
                  <ul>
                    <Scrollspy items={[ 'fashion', 'sports', 'beauty-and-personal-care', 'electronic', 'food-and-beverages', 'furniture-interior-and-diy', 'personal-wear' ]} currentClassName="is-current" offset="5" >
                      <li> <a href="#fashion">Fashion</a> </li>
                      <li> <a href="#sports">Sports</a> </li>
                      <li> <a href="#beauty-and-personal-care">Beauty & Personal Care</a> </li>
                      <li> <a href="#electronic">Electronic</a> </li>
                      <li> <a href="#food-and-beverages">Food & Beverages</a> </li>
                      <li> <a href="#furniture-interior-and-diy">Furniture, Interior & DIY</a> </li>
                      <li> <a href="#personal-wear">Personal Wear</a> </li>
                    </Scrollspy>
                  </ul>
                </div>
              </Col>
              {/*Content Begins*/}
              <Col size="9">
                <FashionTemplates loadImageModal={this.loadImageModal} />
                <SportsTemplates loadImageModal={this.loadImageModal} />               
                <BeautyAndPersonalCareTemplates loadImageModal={this.loadImageModal} />
                <ElectronicTemplates loadImageModal={this.loadImageModal} />
              {/*<FeaturedTemplates loadImageModal={this.loadImageModal} />*/}
                <FoodTemplates loadImageModal={this.loadImageModal} />
                <FurnitureInteriorAndDIYTemplate loadImageModal={this.loadImageModal} />  
                <PersonalWearTemplate loadImageModal={this.loadImageModal} />
                </Col>
              {/*Content Ends*/}
            </Row>
          </div>
        </Container>
      </Layout>
    )
  }
}
export default Templates;
