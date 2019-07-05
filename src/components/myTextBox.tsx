import  * as React from 'react';
interface MyTextBoxProps{
    onChange: () => void;
    type?:string;
}
export class MyTextBox extends React.Component<MyTextBoxProps> {
    constructor(props:MyTextBoxProps ){
        super(props);
    }
    render(){
        const {type} = this.props;
        return(
        <>
        <input type={type ? type: 'text'} onChange={this.props.onChange} />
        </>
        );
    }
}