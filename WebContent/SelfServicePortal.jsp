<%@page import="static com.teamzex.ssp.system.Portal.parameters"%>
<%@page import="com.teamzex.ssp.utils.Constants"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <link href="CSS/style.css" rel="stylesheet">
    <title>Mainframe Password Reset Request</title>
    <script src="JS/script1.js"></script>
</head>
<body onload="init()" onbeforeunload="">
        <form>
            <center>
                <table>
                    <caption>
                        Mainframe Password Reset Request
                        <!--<input type="button" value="X" class="close-button">-->
                    </caption>
                    <tr>
                        <td class="td-left-big">
                            <input checked type="radio" name="credentials" value="internet_ID" id="internet_ID_" onclick="enableButton(this)">
                            <label for="internet_ID_">IBM Internet ID : </label>
                        </td>
                        <td class="td-left">
                            <input type="text" id="internet_ID">
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: center"  colspan="2"><b>OR</b></td>
                    </tr>
                    <tr>
                        <td  class="td-left-big">
                            <input type="radio" name="credentials" value="serial_No" id="serial_No_" onclick="enableButton(this)">
                            <label for="serial_No_">Serial No. : </label>
                        </td>
                        <td class="td-left">
                            <input disabled type="text" id="serial_No">
                        </td>
                    </tr>
                    <tr>
                        <td class="td-left-big">
                            <label>Password : </label>
                        </td>
                        <td class="td-left">
                            <input type="password" id="password">
                        </td>
                    </tr>
                    <tr>
                        <td class="td-left-big">
                            <label>EARTH ID : </label>
                        </td>
                        <td class="td-left">
                            <input type="text" id="tso_id">
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: center">
                            <div>
                                <input type="button" value="Validate & Process" onclick="authenticateUser()">
                            </div>
                        </td>
                        <td style="text-align: center">
                            <div>
                                <input type="button" value="Reset Fields" onclick="resetFields()">
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <fieldset>
                                <legend><b>Status Messages</b></legend>
                                <textarea readonly id="console" name="status"></textarea>
                            </fieldset>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            Developed by Anirban Das, Piyali Banerjee, Raktim Talukdar of RCCIIT as IBM remote 
                            mentoring<br>project under guidance of Sripathi R. Dantuluri, Joydeep Banerjee and Manas Ghosh
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <br>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            For more details on the service, click 
                           <!-- <a href='<%=parameters.get(Constants.PROPERTY_KEY_HELP_LINK)%>' target="_blank">here</a>-->
                        </td>
                    </tr>
                </table>
            </center>
        </form>
    </body>
</html>