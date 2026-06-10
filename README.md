# LeadFlow (sales dashboard)
A modern full-stack sales dashboard web application designed to manage and visualize leads efficiently with categorized lead tracking, filtering, and sorting features.
Built with React frontend, Express/Node backend, MONGODB and a responsive UI, it enhances productivity by organizing sales data into a clear and actionable format across devices.

---

## Demo Link
[Demo Link](https://lead-flow-kappa-lime.vercel.app/)

---

## Quick Start
```
git clone https://github.com/codingwithabhra/LeadFlow.git
cd <your-repo>
npm install
npm run dev # or `npm start` / `yarn dev`
```

---

## Technologies
- React Js
- React Router
- Pie Chart
- Node Js
- Express Js
- Mongodb
- Bootstrap

---

## Demo Video
Watch a walkthrough (5-7 minutes) of all the major features of this app : [Watch Video](https://drive.google.com/drive/folders/1ewpRziGEsAGuZdV1lIDCAf_68wjzzEfh?usp=sharing)

---

## Features
**Home**
- Display Leads, Lead Status and Quick Filters with a navigation bar.

**Lead Details**
- View detailed lead information (name, sales sgent, source, status, priority & time to close).
- Edit button for editing lead details.
- Add new comment.

**Lead List**
- All the leads are listed with their status & sales agent.
- Filters buttons & Sort By buttons.
- Add New Lead button.

**Leads By Status**
- All the leads with name, sales agent, priority & time to close information.
- Filters & Sort By buttons.

**Sales Agent**
- Agent name with their email id.
- Add New Agent button.

**Report**
- Pie Chart for total leads 'closed' vs 'in pipeline'.
- Bar Chart for leads closed by sales agent.
- Pie Chart for lead status distribution.  

**Settings**
- Lead list with delete option.
- Sales Agent list with delete option.

---

## Api Reference

### **GET /api/leads**<br>
Get all the leads info<br>
Sample response:<br>
```
[{_id, name, source, salesagent, status, tags, timetoclose, priority},...]
```

### **POST /api/leads**<br>
To send new lead info to database<br>
Sample response:<br>
```
[{_id, name, source, salesagent, status, tags, timetoclose, priority},...]
```

### **POST /api/leads/:leadId**<br>
Update particular lead info<br>
Sample response:<br>
```
[{_id, name, source, salesagent, status, tags, timetoclose, priority},...]
```

### **DELETE /api/leads/:leadId**<br>
Delete particular lead info<br>
Sample response:<br>
```
[{_id, name, source, salesagent, status, tags, timetoclose, priority},...]
```

### **GET /api/agent**<br>
Get all the agents info<br>
Sample response:<br>
```
[{_id, name, emai},...]
```

### **POST /api/agent**<br>
To send agent info to database<br>
Sample response:<br>
```
[{_id, name, emai},...]
```

### **DELETE /api/agent**<br>
Delete particular agent info<br>
Sample response:<br>
```
[{_id, name, emai},...]
```

### **GET /api/comment**<br>
Get all the comments<br>
Sample response:<br>
```
[{_id, lead, author, commentText},...]
```

### **POST /api/comment**<br>
To send comment to database<br>
Sample response:<br>
```
[{_id, lead, author, commentText},...]
```

### **GET /api/comment/lead/:leadId**<br>
Get lead specific comments<br>
Sample response:<br>
```
[{_id, lead, author, commentText},...]
```

---

## Contacts
For bugs or features request please reach out to patra.abhra97@gmail.com
