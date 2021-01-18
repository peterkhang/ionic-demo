package com.plugin.datepicker;

import android.app.DatePickerDialog;
import android.content.Context;
import android.util.Log;
import android.widget.DatePicker;


public class ZoeDatePickerDialog extends DatePickerDialog {

    private Integer yearSave = null;
    private Integer monthSave = null;
    private Integer daySave = null;

    public ZoeDatePickerDialog(Context context, int themeResId,
                               OnDateSetListener listener, int year,
                               int monthOfYear, int dayOfMonth) {
        super(context, themeResId, listener, year, monthOfYear, dayOfMonth);
    }

    @Override
    public void onDateChanged(DatePicker view, int year, int month, int dayOfMonth) {
        Log.d("onDateChanged", year + "/" + month + "/" + dayOfMonth);
        if( daySave != null && daySave != 2 && dayOfMonth == 1 ) {
            super.onDateChanged(view, yearSave, monthSave, dayOfMonth);
            daySave = dayOfMonth;
            return ; //ignore this case
        }
        super.onDateChanged(view, year, month, dayOfMonth);
        yearSave = year ;
        monthSave = month ;
        daySave = dayOfMonth ;
    }

    @Override
    public void updateDate(int year, int month, int dayOfMonth) {
        Log.d("updateDate", year + "/" + month + "/" + dayOfMonth);
        super.updateDate(year, month, dayOfMonth);
    }
}
