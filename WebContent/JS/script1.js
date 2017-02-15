			var xmlhttpe;
			var paramName;
			var param;
			var password;
			var tso_id;
			var credentials;
			var internet_ID;
			var serial_No;
			var console;
			function loadXMLDoc(url,params,cfunc) {
                if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
                    xmlhttpe=new XMLHttpRequest();
                }
                else {// code for IE6, IE5
                    xmlhttpe=new ActiveXObject("Microsoft.XMLHTTP");
                }
                xmlhttpe.onreadystatechange=cfunc;
                xmlhttpe.open("POST",url,false);
                xmlhttpe.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                xmlhttpe.send(params);
            }
			function authenticateUser() {
                            param = document.getElementById(paramName.id);
				if(validateCredentials()) {
					
					var url = "";
					url = url + paramName.id + "=" + param.value + "&";
					url = url + "password=" + password.value;
                                        loadXMLDoc("AuthenticateUser", url, function() {
						if (xmlhttpe.readyState===4 && xmlhttpe.status===200)
						{
							var response = xmlhttpe.responseText;
							alert(response);
							var status = parseResponse(response);
							alert(status);
							writeToConsole(response);
							if(status === "success") {
								submitRequest();
							}
						}
					});
				} else {
					alert("Please rectify the fields marked in red!");
				}
			}
			function submitRequest() {
				var url = "";
                                url = url + "mode=start&";
				url = url + paramName.id + "=" + param.value + "&";
				url = url + "tso_id=" + tso_id.value;
				loadXMLDoc("SubmitRequest", url, function() {
					if (xmlhttpe.readyState===4 && xmlhttpe.status===200)
					{
						var response = xmlhttpe.responseText;
						writeToConsole(response);
					}
				});
			}
			function parseResponse(response) {
				var header = response.split("\n");
				return header[header.length -1];
			}
			function enableButton(rd) {
                            var val = rd.value;
                        paramName = document.getElementById(val);
                        paramName.disabled = false;
                        if(val === "internet_ID") {
                            document.getElementById("serial_No").disabled = true;
                        } else {
                            document.getElementById("internet_ID").disabled = true;
                        }
                        
            }
			function validateCredentials() {
				var b = new Array(3);
                var falg;
                if(paramName.value === "") {
                    paramName.style.border = "1px solid red";
                    b[0] = false;
                } else {
                    paramName.style.border = "";
                    b[0] = true;
                }
                if(password.value === "") {
                    password.style.border = "1px solid red"; 
                    b[1] = false;
                } else {
                    password.style.border = "";
                    b[1] = true;
                }
                if(tso_id.value === "") {
                    password.style.border = "1px solid red";
                    b[2] = false;
                } else {
                    password.style.border = "";
                    b[2] = true;
                }
                for(var i = 0;i<3;i++) {
                    if(b[i] === false) {
                        falg = false; 
                        break;
                    } else {
                        falg = true;
                    }
                }
                return falg;
			}
			function init() {
				password = document.getElementById("password");
				tso_id = document.getElementById("tso_id");
				credentials = document.getElementsByName("credentials");
				internet_ID = document.getElementById("internet_ID");
				serial_No = document.getElementById("serial_No");
				console = document.getElementById("console");
			}
			function resetFields() {
				var r = confirm("Are you sure you want to reset the fields?");
                                if (r === true) {
					password.value = "";
					tso_id.value = "";
					internet_ID.value = "";
					serial_No.value = "";
                                        console.readonly = false;
                                        console.value = "";
                                        console.readonly = true;
					for(var i = 0 ; i < credentials.length ; i++ ) {
						credentials[i].selected = false;
					}
				}
			}
			function writeToConsole(text) {
				console.readonly = false;
				console.value = console.value + text + "\n";
				console.readonly = true;
			}
			function terminateConnection () {
                            var url = "";
                                url = url + "mode=stop";
				loadXMLDoc("SubmitRequest", url, function() {
					if (xmlhttpe.readyState===4 && xmlhttpe.status===200)
					{
						//do something
					}
				});
                        }