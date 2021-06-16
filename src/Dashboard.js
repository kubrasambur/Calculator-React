import React ,{useState,useEffect}from "react";
import { Button } from "semantic-ui-react";
import NumberFormat from "react-number-format"

function Dashboard() {

  const [preState, setPreState] = useState("");
  const [curState, setCurState] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

    const inputNum=(e)=>{
      if(curState.includes(".") && e.target.innerText===".") return

      if(total){
        setPreState("")
      }
      curState ? setCurState(pre => pre +e.target.innerText) 
      :setCurState(e.target.innerText)
      setTotal(false)
    }

    useEffect(() => {
      setInput(curState)
    }, [curState])

    useEffect(() => {
      setInput("0")
    }, [])

    const operatorType=(e)=>{
        setTotal(false)
        setOperator(e.target.innerText)
        if(curState === "")return
        if(preState !== ""){
          equals()
        }else{
          setPreState(curState)
          setCurState("")
        }
    }
    const equals=(e)=>{
      if(e?.target.innerText==="="){
        setTotal(true)
      }
    
    let cal
    switch (operator) {
      case "/":
        cal = String(parseFloat(preState) / parseFloat(curState))
        break;
        case "+":
        cal = String(parseFloat(preState) + parseFloat(curState))
        break;
        case "-":
        cal = String(parseFloat(preState) - parseFloat(curState))
        break;
        case "x":
        cal = String(parseFloat(preState) * parseFloat(curState))
        break;
    
      default:
        return
    }
    setInput("")
    setPreState(cal)
    setCurState("")
  }

    const minusPlus=()=>{
      if (curState.charAt(0) === "-") {
        setCurState(curState.substring(1));
      } else {
        setCurState("-" + curState);
      }
    }
    const percent=(e)=>{
      preState
      ? setCurState(String((parseFloat(curState) / 100) * preState))
      : setCurState(String(parseFloat(curState) / 100));
    }
    const reset=()=>{
      setPreState("")
      setCurState("")
      setInput("0")
    }
     return (
    <div>
      <table className="Table">
        <tr className="th">
          <th colSpan="4">{input !=="" || input==="0" 
          ? (<NumberFormat value={input} displayType={"text"} thousandSeparator={true}/>)
          :(<NumberFormat value={preState} displayType={"text"} thousandSeparator={true}/>)}
          </th>
        </tr>
        <tr>
          <td className="islemler"> <Button onClick={reset}  value="AC" className="button-islem">AC</Button> </td>
          <td className="islemler"> <Button onClick={percent} value="%" className="button-islem">%</Button> </td>
          <td className="islemler"> <Button onClick={minusPlus} value="+/-" className="button-islem">+/-</Button> </td>
          <td className="islemler"> <Button onClick={operatorType} value="/" className="button-islem">/</Button> </td>
        </tr>
        <tr>
          <td className="rakamlar"><Button onClick={inputNum} value="7" className="button-rakam">7</Button></td>
          <td className="rakamlar"><Button onClick={inputNum} value="8" className="button-rakam">8</Button></td>
          <td className="rakamlar"><Button onClick={inputNum} value="9" className="button-rakam">9</Button></td>
          <td className="islemler"><Button onClick={operatorType} value="x" className="button-islem">x</Button></td>
        </tr>
        <tr >
          <td className="rakamlar"><Button onClick={inputNum} value="4" className="button-rakam">4</Button></td>
          <td className="rakamlar"><Button onClick={inputNum} value="5" className="button-rakam">5</Button></td>
          <td className="rakamlar"><Button onClick={inputNum} value="6" className="button-rakam">6</Button></td>
          <td className="islemler"><Button onClick={operatorType} value="-" className="button-islem">-</Button></td>
        </tr>
        <tr >
          <td className="rakamlar"><Button onClick={inputNum} value="1" className="button-rakam">1</Button></td>
          <td className="rakamlar"><Button onClick={inputNum} value="2" className="button-rakam">2</Button></td>
          <td className="rakamlar"><Button onClick={inputNum} value="3" className="button-rakam">3</Button></td>
          <td className="islemler"><Button onClick={operatorType} value="+" className="button-islem">+</Button></td>
        </tr>
        <tr >
          <td colSpan="2" className="rakamlar"><Button onClick={inputNum} value="0" className="button-rakam">0</Button></td>
          <td className="rakamlar"><Button onClick={inputNum} value="." className="button-rakam">.</Button></td>
          <td className="islemler"><Button onClick={equals} value="=" className="button-islem">=</Button></td>
        </tr>
      </table>
    </div>
  );
   }
  

export default Dashboard

/*

state={
      numbers:[]
    }
    changeHandle = (event) => {
      event.preventDefault();
      let clonenumbers = Object.assign({}, this.state);
      clonenumbers.numbers.push(event.target.value);
      this.setState({ numbers: clonenumbers.numbers });
      if(Button.value==="equal"){
        return this.setState({numbers:event.target.value+event.target.value})
      }
    }

    
   state2={
    numbers2:[]
  }

    changeHandle2=(e)=>{
      e.preventDefault();
      let clonenumbers2 = Object.assign(this.state, this.state2);
      clonenumbers2.numbers2.push(e.target.value);
      this.setState({ numbers: clonenumbers2.numbers2 });
    }

    cikar=(e)=>{
      e.preventDefault();
      if(Button.value==="-"){
          this.setState({})
      }

    }

    add(a,b) {
      return a+b
    }


*/
