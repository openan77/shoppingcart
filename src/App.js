import React from 'react';

import CollectionPreview from './components/collection-preview/collection-preview.component';
import Header from './components/header/header.component';

import SHOP_DATA from './shop_data';
import './App.css';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      items : SHOP_DATA
    };
  }

  componentDidMount(){
  }

  render(){
    const { items } = this.state;
    return(
      <div>
        <Header />
        {
        items.map(
          item => <CollectionPreview key={item.id} title={item.title} items={item.items} />
        )
        }
      </div>
     )
  }
}


export default App;
