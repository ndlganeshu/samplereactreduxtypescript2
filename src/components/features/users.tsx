import * as React from 'react';
import {listFeatureFactory, IListFeatureOptions} from '../../common/features/list/listFeatureFactory';
const ListFeatureOptions: IListFeatureOptions = {
    
};
const UsersFeature = listFeatureFactory(ListFeatureOptions);
export default class Users extends React.Component{

    render(){
        return(
            <div>
                <UsersFeature />
            Users ........
            </div>
        )
    }

}