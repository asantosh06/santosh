package mylas.com.erp.demo;
// Generated Jul 19, 2018 12:46:33 PM by Hibernate Tools 5.3.0.Beta2

/**
 * TblLeavestatus generated by hbm2java
 */
public class TblLeavestatus implements java.io.Serializable {

	private Integer leavestatusid;
	private String leavestatus;
	private Boolean isactive;

	public TblLeavestatus() {
	}

	public TblLeavestatus(String leavestatus, Boolean isactive) {
		this.leavestatus = leavestatus;
		this.isactive = isactive;
	}

	public Integer getLeavestatusid() {
		return this.leavestatusid;
	}

	public void setLeavestatusid(Integer leavestatusid) {
		this.leavestatusid = leavestatusid;
	}

	public String getLeavestatus() {
		return this.leavestatus;
	}

	public void setLeavestatus(String leavestatus) {
		this.leavestatus = leavestatus;
	}

	public Boolean getIsactive() {
		return this.isactive;
	}

	public void setIsactive(Boolean isactive) {
		this.isactive = isactive;
	}

}
