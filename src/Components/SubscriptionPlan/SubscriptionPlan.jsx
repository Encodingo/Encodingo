import React,{useState} from 'react';
import axios from "axios";
import { useSelector } from "react-redux";
import { server } from "../../store";

const cardButtonStyle={
  border:'2px solid #FF2171',
  borderRadius:'15px',
  margin:'auto',
  marginTop:'10px',
  padding:'0px 15px 0px 15px',
}
const cardStyle={
  border: '2px solid #FF2171',
  borderRadius: '20px',
  padding:'15px',
  margin: '10px',
  textAlign:'center',
}
const cardSaveStyle={
  backgroundColor: '#E7B10A',
  fontWeight:'bold',
  color:'black',
  borderRadius:'20px',
  fontSize:'13px', 
  width:'50%',
  textAlign:'center',
  margin:'auto'

}
const cardCutStyle={
  textDecoration:'line-through',
  textDecorationColor:'red',
  fontSize:'20px'

}
const cardPriceStyle={
  fontWeight:'bold',
  fontSize:'30px'

}

const SubscriptionPlan = () => {
    const {isAuthenticated,user}=useSelector((state)=>state.user);
    const [selectedPlan, setSelectedPlan] = useState('1');
    const [session1,setSession1]=useState(5);
    const [session2,setSession2]=useState(10);
    const [session3,setSession3]=useState(20);
    const [price1,setPrice1]=useState(699);
    const [price2,setPrice2]=useState(1199);
    const [price3,setPrice3]=useState(2199);
    const [oPrice1,setOPrice1]=useState(699);
    const [oPrice2,setOPrice2]=useState(1399);
    const [oPrice3,setOPrice3]=useState(2799);
    const handlePlanSelection = (plan) => {
        setSelectedPlan(plan);
        if(plan==='1'||plan===""){
           setSession1(5);
           setSession2(10);
           setSession3(20);
           setPrice1(699);
           setPrice2(1199);
           setPrice3(2199);
           setOPrice1(699);
           setOPrice2(1399);
           setOPrice3(2799);
        }
        else if(plan=='2'){
            setSession1(20);
           setSession2(30);
           setSession3(40);
           setPrice1(699);
           setPrice2(3199);
           setPrice3(4199);
           setOPrice1(2799);
           setOPrice2(4199);
           setOPrice3(5599);
        }
        else if(plan=='3'){
            setSession1(40);
           setSession2(50);
           setSession3(60);
           setPrice1(4199);
           setPrice2(4999);
           setPrice3(5799);
           setOPrice1(5599);
           setOPrice2(6999);
           setOPrice3(8399);

        }
      };
      const handlePay=async(session,price)=>{
          const {
            data: { order },
          } = await axios.post(`${server}/checkout`, {
            price,
          });
      
          const {
            data: { key },
          } = await axios.post(`${server}/getkey`);

          var options = {
            key: key,
            // Enter the Key ID generated from the Dashboard
            amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "Encodingo",
            description: "Test Transaction",
            image:
              "https://media.licdn.com/dms/image/C4D0BAQFtBLGRZheO1g/company-logo_200_200/0/1680117752366?e=1695859200&v=beta&t=_FpoVRBERwBTxlq2nF1K_QDNdAGHv578-hIOYp2rVRo",
            order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            // "handler": function (response){
            //   axios.post(`apipay/paymentVerification`,{
            //     id,user
            //   });
            // },
            callback_url: `${server}/paymentverification?userSession=${session}&&userName=${user.name}&&userEmail=${user.email}&&mobileNumber=${user.phone}&&paidAmount=${price}&&isSubscriber=${true}`,
            prefill: {
              name: user.name,
              email: user.email,
              contact: user.phone,
            },
            notes: {
              address: "Razorpay Corporate Office",
            },
            theme: {
              color: "#121212",
            },
          };
          const razor = new window.Razorpay(options);
          razor.open();

      }

  return (<>
  <div
>   <h2 style={{ textAlign: 'center', color: '#FF2171', marginTop:'100px' }}>Subscription Plans</h2>
</div> 
<div style={{ display: 'flex', justifyContent: 'center' }}>
        <button 
          style={{
            margin: '0 10px',
            width:'120px',
            height:'50px',
            border:'1px solid #FF2171',
            borderRadius:'10px',
            fontWeight:'bold',
            backgroundColor: selectedPlan === '1' ? '#FF2171' : '',
            color:selectedPlan==='1'?'white':'#FF2171',} }
          onClick={()=> handlePlanSelection('1')}
        >
          1 Month
        </button>
        <button 
          style={{
             margin: '0 10px',
            width:'120px',
            height:'50px',
            border:'1px solid #FF2171',
            borderRadius:'10px',
            fontWeight:'bold',
            backgroundColor: selectedPlan === '2' ? '#FF2171' : '',
            color:selectedPlan==='2'?'white':'#FF2171', 
          }}
          onClick={()=> handlePlanSelection('2')}
        >
          2 Month
        </button>
        <button 
          style={{
            margin: '0 10px',
            width:'120px',
            height:'50px',
            border:'1px solid #FF2171',
            borderRadius:'10px',
            fontWeight:'bold',
            backgroundColor: selectedPlan === '3' ? '#FF2171' : '',
            color:selectedPlan==='3'?'white':'#FF2171',
          }}
          onClick={ ()=>handlePlanSelection('3')}
        >
          3 Month
        </button>
      </div>

    {/* Subscribe Cards */}

      <div className='card-container' style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={cardStyle} >
        <h3>{session1} Sessions</h3>
        <p style={cardCutStyle}>₹{oPrice1}</p>
        <p style={cardPriceStyle}>₹{price1}</p>
        <span style={cardSaveStyle }>Save{Math.ceil(((oPrice1-price1)*100)/price1)}%</span>
        <button onClick={()=>handlePay(session1,price1)}  style={cardButtonStyle}>Subscribe</button>
      </div>
      <div style={cardStyle}>
        <h3>{session2} Sessions</h3>
        <p style={cardCutStyle}>₹{oPrice2}</p>
        <p style={cardPriceStyle}>₹{price2}</p>
        <span style={cardSaveStyle}>Save{Math.ceil(((oPrice2-price2)*100)/price2)}%</span>
        <button onClick={()=>handlePay(session2,price2)}  style={cardButtonStyle}>Subscribe</button>
      </div>
      <div style={cardStyle}>
        <h3>{session3} Sessions</h3>
        <p style={cardCutStyle}>₹{oPrice3}</p>
        <p style={cardPriceStyle}>₹{price3}</p>
        <span  style={cardSaveStyle}>Save{Math.ceil(((oPrice3-price3)*100)/price3)}%</span>
        <button onClick={()=>handlePay(session3,price3)} className='conatainer-card-button' style={cardButtonStyle}>Subscribe</button>
      </div>
    </div>
     
    </>
  )
}

export default SubscriptionPlan;