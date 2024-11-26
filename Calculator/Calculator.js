function display(value)
            {
                document.getElementById("result").value += value;
            }

            function clearDisplay()
            {
                document.getElementById("result").value="";
            }

            function backspace() 
            {
                let currentValue = document.getElementById("result").value;
                document.getElementById("result").value = currentValue.slice(0, -1); 
            }

            function cal()
            {
                try
                {
                    let x = eval(document.getElementById("result").value);
                    document.getElementById("result").value = x; 
                }
                catch(error)
                {
                    document.getElementById("result").value = "Error";
                }
            }
