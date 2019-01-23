package student;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Scanner;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSON;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

/**
 * Servlet implementation class Student
 */
//@WebServlet("/student")
public class Student extends HttpServlet {
	private static final long serialVersionUID = 1L;
    public Student() {
        super();
    }
    
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		String str = request.getParameter("message");
		
		if(str==null || str.equals("") || str.equals("null"))
		{
			File file = new File("D:\\eclipse\\demo\\stu_infor.txt");
			FileInputStream input = new FileInputStream(file);
			Scanner scanner = new Scanner(input);
			String content = new String("");
			ArrayList<Infor> list = new ArrayList<Infor>();
			while(scanner.hasNextLine())
			{
				content = scanner.nextLine();
				String[] str1 = content.split(" ");
				Infor infor = new Infor();
				infor.numberTxt = str1[0];
				infor.nameTxt = str1[1];
				infor.academyTxt = str1[2];
				infor.majorTxt = str1[3];
				infor.gradeTxt = str1[4];
				infor.classTxt = str1[5];
				infor.ageTxt = str1[6];
				list.add(infor);
			}
			scanner.close();
			System.out.println(list.size());
			
			JSONArray array = new JSONArray();
			for(int i = 0; i < list.size(); i++)
			{
				JSONObject js = new JSONObject();
				js.put("numberTxt", list.get(i).numberTxt);
				js.put("nameTxt", list.get(i).nameTxt);
				js.put("academyTxt", list.get(i).academyTxt);
				js.put("majorTxt", list.get(i).majorTxt);
				js.put("gradeTxt", list.get(i).gradeTxt);
				js.put("classTxt", list.get(i).classTxt);
				js.put("ageTxt", list.get(i).ageTxt);
				array.add(js);
			}
			PrintWriter pw = response.getWriter();
			pw.print(array.toString());
		}
		else
		{
			JSONArray array1 = JSONArray.fromObject(str);
			ArrayList<Infor> list1 = new ArrayList<Infor>();
			for(int i=0; i<array1.size(); i++)
			{
				JSONObject js1 = array1.getJSONObject(i);
				Infor infor = new Infor();
				infor.numberTxt = js1.getString("numberTxt");
				infor.nameTxt = js1.getString("nameTxt");
				infor.academyTxt = js1.getString("academyTxt");
				infor.majorTxt = js1.getString("majorTxt");
				infor.gradeTxt = js1.getString("gradeTxt");
				infor.classTxt = js1.getString("classTxt");
				infor.ageTxt = js1.getString("ageTxt");
				list1.add(infor);
			}
			File file1 = new File("D:\\eclipse\\demo\\stu_infor.txt");
			PrintWriter write = new PrintWriter(file1);
			for(int i=0; i<list1.size(); i++)
			{
				write.print(list1.get(i).numberTxt + " ");
				write.print(list1.get(i).nameTxt + " ");
				write.print(list1.get(i).academyTxt + " ");
				write.print(list1.get(i).majorTxt + " ");
				write.print(list1.get(i).gradeTxt + " ");
				write.print(list1.get(i).classTxt + " ");
				write.print(list1.get(i).ageTxt);
				if(i != list1.size()-1)
					write.println();
			}
			write.close();
		}
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}
}
class Infor{
	String numberTxt;
	String nameTxt;
	String academyTxt;
	String majorTxt;
	String gradeTxt;
	String classTxt;
	String ageTxt;
	Infor(){
	}
}