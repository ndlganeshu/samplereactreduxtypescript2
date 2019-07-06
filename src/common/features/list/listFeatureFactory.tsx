import * as React from 'react';

export interface IListFeatureOptions{

}

export function listFeatureFactory(Options: IListFeatureOptions){

    class ListFeature extends React.Component{
        render(){
            return(
                <div>
                    Hello from feature....
                </div>
            )
        }
    }
return ListFeature;
}