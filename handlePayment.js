const handlePaymentInfo=async (id)=>{
    const data = await fetch(`ROOMS.json`);
    const result = await data.json();
    const roomInfo=result.find(r => r._id==id)
    document.getElementById('paymentModalLevel').innerText = roomInfo.name
}