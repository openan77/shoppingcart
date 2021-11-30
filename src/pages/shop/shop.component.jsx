import React from 'react';
import SHOP_DATA from '../../shop_data';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component{
    constructor(){
        super();
    
        this.state = {
          items : SHOP_DATA
        };
      }

      render(){
        const { items } = this.state;
        return(
          <div>
            {
            items.map(
              item => <CollectionPreview key={item.id} title={item.title} items={item.items} />
            )
            }
          </div>
         )
      }
};

export default ShopPage;