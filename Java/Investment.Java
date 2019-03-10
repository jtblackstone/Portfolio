//Jason Blackstone
//COMP-271-001RL Programming II
//Menus (Lab 13)

import java.awt.BorderLayout;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.text.NumberFormat;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JTextField;

@SuppressWarnings("serial")
public class Investment extends JFrame {
	private JPanel container = new JPanel();
	private JLabel[] ilabels = new JLabel[4];
	private String[] ilist = { "Investment Amount", "Years",
			"Annual Interest Rate", "Future Value" };
	private JTextField[] itext = new JTextField[4];
	private JButton compute = new JButton("Calculate");
	private JMenuBar menu = new JMenuBar();
	private JMenu file = new JMenu("Operation");
	private JMenu about = new JMenu("Help");
	private JMenuItem calculate, exit, aboutP;
	
	
	public static void main(String[] args) {
		Investment inv = new Investment();
		inv.pack();
		inv.setDefaultCloseOperation(EXIT_ON_CLOSE);
		inv.setVisible(true);
	}

	public Investment() {
		setJMenuBar(menu);
		
		file.add(calculate = new JMenuItem("Calculate"));
		file.addSeparator();
		file.add(exit = new JMenuItem("Exit"));
		
		about.add(aboutP = new JMenuItem("About"));
		
		menu.add(file);
		menu.add(about);
		
		setLayout(new BorderLayout());
		add(container, BorderLayout.NORTH);
		container.setLayout(new GridLayout(4, 2));

		for (int i = 0; i < ilabels.length; i++) {
			container.add(ilabels[i] = new JLabel(ilist[i]));
			container.add(itext[i] = new JTextField());
		}
		add(compute, BorderLayout.PAGE_END);
		itext[3].setEditable(false);

		compute.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				calculateInvestment();
			}
		});
		
		calculate.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				calculateInvestment();
			}
		});
		
		exit.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				System.exit(0);
			}
		});
		
		aboutP.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				JOptionPane.showMessageDialog(new JFrame(), "Hi, I'm just a simple calculator.");
			}
		});
	}

	protected void calculateInvestment() {
		double investment = Double.parseDouble(itext[0].getText());
		int years = Integer.parseInt(itext[1].getText());
		double interest = Double.parseDouble(itext[2].getText());
		
		double value = investment * Math.pow((1 + interest/1200),(years*12));
		NumberFormat nf = NumberFormat.getCurrencyInstance();
		
		itext[3].setText(nf.format(value));
	}
}
