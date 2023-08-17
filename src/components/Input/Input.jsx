// eslint-disable-next-line react/prop-types
const Input = ({changeHandler}) => {
    const onChangeHandler = (e) => changeHandler(e.target.value)
    return (
        <input type="text" onChange={onChangeHandler}/>
    )
}
export default Input

