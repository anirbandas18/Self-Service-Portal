/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.teamzex.ssp.ldap;

import com.ibm.bluepages.BPResults;
import com.ibm.bluepages.BluePages;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Vector;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import swat.ReturnCode;
import swat.cwa;

/**
 *
 * @author Stifler
 */
public class ExecuteLDAP extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        String intranet_id = request.getParameter("intranet_id");
        String password = request.getParameter("password");
        String mainframe_id = request.getParameter("mainframe_id");
        String serverURL = "bluepages.ibm.com";
        BPResults peopleResults = BluePages.getPersonsByInternet(intranet_id);
        
	Vector nameColumn = peopleResults.getColumn("EMPNUM");
	String EmpID = (String) nameColumn.elementAt(0);
        ReturnCode rc = cwa.authenticate(serverURL, intranet_id, password);
        if(rc.getCode() == 0) {
            out.println("Employee Found!");
            //it will extract the respective nites id, serial no, country code
            //it will connect to the required db2 table
            //it will validate the entered mainframe id with the entered ibm internet id
        } else {
            out.println("Employee Not Found!");
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
