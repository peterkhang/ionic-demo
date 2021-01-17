package com.plugin.datepicker;

import android.app.DatePickerDialog;
import android.content.Context;
import android.util.Log;
import android.widget.DatePicker;


public class ZoeDatePickerDialog extends DatePickerDialog {

    public ZoeDatePickerDialog(Context context, int themeResId,
                               OnDateSetListener listener, int year,
                               int monthOfYear, int dayOfMonth) {
        super(context, themeResId, listener, year, monthOfYear, dayOfMonth);
    }

    @Override
    public void onDateChanged(DatePicker view, int year, int month, int dayOfMonth) {
        Log.d("onDateChanged", year + "/" + month + "/" + dayOfMonth);
        super.onDateChanged(view, year, month, dayOfMonth);
    }

    @Override
    public void updateDate(int year, int month, int dayOfMonth) {
        Log.d("updateDate", year + "/" + month + "/" + dayOfMonth);
        super.updateDate(year, month, dayOfMonth);
    }
}
