import React from 'react'
import './Columns.css'

export default function Columns() {

  return (  
    <div>
        <div className='platillos'>
            <p>PLATILLOS MEJOR VALORADOS</p>
        </div>
        <div className="grid-container">

        <div class="column ">
                <div class="content is-desktop">
                    <h1>RAMEN</h1>
                    <figure class="image is-256x256">
                    <img class="is-rounded" src="https://cdn.shopify.com/s/files/1/0557/8545/5765/files/Savory_Beef_Ramen_480x480.jpg?v=1650135542"></img>
                    </figure>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
                </div>
            </div>
        <div class="column">
                
                <div class="content is-desktop"  >
                    <h1>SUSHI</h1>
                    <figure class="image is-256x256">
                    <img class="is-rounded" src="https://www.emporiosushi.com/img/menu-box-charolas-2.jpg"></img>
                    </figure>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
                </div>
        
            </div>
            <div class="column">
                <div class="content is-desktop">
                    <h1>UDON</h1>
                    <figure class="image is-256x256">
                    <img class="is-rounded" src="https://www.connoisseurusveg.com/wp-content/uploads/2022/02/udon-noodle-soup-sq-7.jpg"></img>
                    </figure>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
                </div>
            </div>

            <div class="column">
                <div class="content is-desktop">
                    <h1>SOBA</h1>
                    <figure class="image is-256x256">
                    <img class="is-rounded" src="https://www.connoisseurusveg.com/wp-content/uploads/2022/06/soba-noodle-salad-sq.jpg"></img>
                    </figure>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
